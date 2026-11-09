import CardItem from './CardItem'

function Posts({ posts }) {
    return (
        <div>
            <table className="w-full table-fixed">
                <thead className="text-[#243C7B]">
                    <tr>
                        <th className="w-[30%] border border-[#F5F5F5] p-3">Posts</th>
                        <th className="w-[14%] border border-[#F5F5F5] p-3">Type</th>
                        <th className="w-[12%] border border-[#F5F5F5] p-3">Sharing Time</th>
                        <th className="w-[12%] border border-[#F5F5F5] p-3">Status</th>
                        <th className="w-[11%] border border-[#F5F5F5] p-3">Publish Status</th>
                        <th className="w-[10%] border border-[#F5F5F5] p-3">Author</th>
                        <th className="w-[11%] border border-[#F5F5F5] p-3">Actions</th>
                    </tr>
                </thead>

                <tbody className="bg-[#FCFCFC]">
                    {posts.map(post => (
                        <CardItem key={post.id} item={post} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Posts