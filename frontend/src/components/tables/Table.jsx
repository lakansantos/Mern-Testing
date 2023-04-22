import { Table } from "reactstrap";

const PagesTable = ({data, isLoading}) => {
    return (
        <Table 
            hover
            striped
        >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Message</th>
                    <th>Action</th>
                </tr>
            </thead>
            {isLoading &&
                <tbody>
                    <tr>
                        <td colSpan={"6"}>Loading...</td>
                    </tr>
                </tbody>
            }
            <tbody>
            {data.length > 0 ? (
                data.map((post, index) => {
                    return (
                        <tr key={post._id}>
                            <td>{index}</td>
                            <td>{post.title}</td>
                            <td>{post.message}</td>
                            <td>Edit delete</td>
                        </tr>
                    )
                })
            ) :
            (
                <tr>
                    <td colSpan={"6"} className="text-center">
                        <h1>No posts yet</h1>
                    </td>
                </tr>
            )
        
            }
            </tbody>
        </Table>
    )
}

export default PagesTable