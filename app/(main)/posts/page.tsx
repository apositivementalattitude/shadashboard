import PostsPagination from "@/components/posts/PostsPagination";
import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/ui/BackButton";

const PostsPage = () => {
    return  (
    <>
        <BackButton text='Go Back' link='/' />
        <PostsTable />
        <PostsPagination />
    </>
    );
};
 
export default PostsPage;