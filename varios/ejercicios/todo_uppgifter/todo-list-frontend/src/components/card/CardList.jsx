import Card from './Card'



const CardList = ( { users }) => {
    return (
        <>
            {
                users.map((user, i) => {
                    return (
                        <Card key={ i }
                              name={ user.name }
                              todo={ user.todo }
                              id={ user.id }/>
                    )
                })
            }
        </>
    )
}

export default CardList
