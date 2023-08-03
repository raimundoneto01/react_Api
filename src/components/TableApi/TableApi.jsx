

export const TableApi = (props) => {
    console.log(props.data);

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                            {props.colunas.map((coluna, index) => <th key={index} scope="col">{coluna}</th>)}

                    </tr>
                </thead>
                <tbody>
                        {props.data.map(user =>
                            <tr key={user.id    }>
                                <th scope="row">{user.id}</th>
                                <th>{user.name}</th>
                                <th>{user.email}</th>
                                <th>{user.username}</th>
                                <th>{user.website}</th>
                                <th>{`${user.address.street}, ${user.address.suite}, ${user.address.zipcode}`}</th>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>

    )
}
