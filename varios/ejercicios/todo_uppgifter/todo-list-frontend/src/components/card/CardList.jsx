import Card from './Card'



const CardList = ( { users }) => {
    return (
        <>
            {
                users.map((user, i) => {
                    return (
                        <Card key={ i }
                              name={ user.name }
                              task={ user.task }
                              />
                    )
                })
            }
        </>
    )
}

export default CardList
