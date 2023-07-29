import { useRouter } from "next/router"
function Review(){
    const router = useRouter()
    const {productID, reviewID} = router.query

    return(
        <h1>review {reviewID} for product of: {productID}</h1>
    )
}

export default Review

//http://localhost:3000/product/10/review/10 = url