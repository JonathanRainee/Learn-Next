import { useRouter } from "next/router"

function Detail(){

    const router = useRouter()
    const ID = router.query.productID

    return(
        <h1>detail product of: {ID}</h1>
    )
}

export default Detail