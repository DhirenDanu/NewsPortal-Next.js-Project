import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewLetter";
import NewsCard from "@/components/NewsCard";
import { NewsItem } from "@/types/news";

export default async function Home() {
  const response = await fetch(`https://news-api-next-js-kappa.vercel.app/api/news`);

  // Await the response and log it
  const newsData = await response.json();
  console.log(newsData);


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div>
      <Banner />
    </div>
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-8">Latest News</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {newsData.slice(0, 3).map((item: NewsItem) => (
          <NewsCard key={item._id} item={item} />

        ))}
      </div>
    </div>
   <div> 
    <NewsLetter/>
    </div>
    
  </div>
  

);
}











