import ArticleList from './components/ArticleList';
import ArticleForm from './components/ArticleForm';

export default function App() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Articles</h1>
      <ArticleList />
      <ArticleForm />
    </div>
  );
}