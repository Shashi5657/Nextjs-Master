import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

const NewsPage = async () => {
  // const response = await fetch('http://localhost:8080/news')
  // const news = await response.json()

  const news = await getAllNews();

  return (
    <>
      <h1>This is the News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
