import Card from './Card'



const CardList = ( { users }) => {
    return (
        <>
            {
                users.map((user, i) => {
                    return (
                        <Card key={ i }
                              name={ user.name }
                              age={ user.age }
                              gender={ user.gender }/>
                    )
                })
            }
        </>
    )
}

export default CardList
