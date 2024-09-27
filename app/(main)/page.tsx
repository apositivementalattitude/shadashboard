import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";


export default function Home() {
    return (
  <>
  {/* Individual cards */}
  <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
    <DashboardCard 
      title='Posts' 
      count={100} 
      icon={ <Newspaper className='text-slate-500' size={72} />}
    />
    <DashboardCard 
      title='Categories' 
      count={12} 
     icon={ <Folder className='text-slate-500' size={72} />}
    />
    <DashboardCard 
      title='Users' 
      count={750} 
      icon={ <User className='text-slate-500' size={72} />}
    />
    <DashboardCard 
      title='Comments' 
      count={1200} 
      icon={ <MessageCircle className='text-slate-500' size={72} />}
    />
  </div>
  <AnalyticsChart />
{/* Title for the posts and limits the number of items that show in a table */}
  <PostsTable title='Latest Post' limit={5}/>
  </>
  );
}