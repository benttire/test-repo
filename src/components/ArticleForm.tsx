import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function ArticleForm() {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    author: '',
    content: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('article').insert([formData]);
    if (!error) window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <input className="w-full border p-2" name="title" placeholder="Title" onChange={handleChange} required />
      <input className="w-full border p-2" name="subtitle" placeholder="Subtitle" onChange={handleChange} required />
      <input className="w-full border p-2" name="author" placeholder="Author" onChange={handleChange} required />
      <textarea className="w-full border p-2" name="content" placeholder="Content" rows={5} onChange={handleChange} required />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Add Article</button>
    </form>
  );
}