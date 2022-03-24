export async function get({ params }) {
    // connect to db and get data
    // for this, we'll just use some dummy data

    const guides = [
        {id: 1, title: 'some title 1', body: 'body for title 1'},
        {id: 2, title: 'some title 2', body: 'body for title 2'},
        {id: 3, title: 'some title 3', body: 'body for title 3'},
        {id: 4, title: 'some title 4', body: 'body for title 4'},
        {id: 5, title: 'some title 5', body: 'body for title 5'},

    ]

    const guide = guides.find(gVar => gVar.id == params.id)


    console.log(guide)

    if (guide) {
        return {
            status: 200,
            body: {guide} 
        }
    }
    return {
        status: 404
    }
}