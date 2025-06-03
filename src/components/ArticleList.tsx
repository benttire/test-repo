import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

type Article = {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  created_at: string;
  content: string;
};

export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('article')
        .select('*')
        .order('created_at', { ascending: false });
      if (data) setArticles(data);
    };
    fetchArticles();
  }, []);

  return (
    <div className="space-y-6">
      {articles.map((item) => (
        <div key={item.id} className="border p-4 rounded-xl shadow">
          <h2 className="text-xl font-bold">{item.title}</h2>
          <h3 className="text-md italic text-gray-600">{item.subtitle}</h3>
          <p className="text-sm text-gray-500">{item.author} — {new Date(item.created_at).toLocaleDateString()}</p>
          <p className="mt-2">{item.content}</p>
        </div>
      ))}
    </div>
  );
}