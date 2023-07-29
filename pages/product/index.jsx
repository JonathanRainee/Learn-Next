import Link from 'next/link'

function Product({ ProductID = 100}){
    return(
        <>
            <Link href="/">
                <p>Home</p>
            </Link>
            <Link href="/product/1">
                <h2>prod 1</h2>
            </Link>
            <Link href="/product/2">
                <h2>prod 2</h2>
            </Link>
            <Link href="/product/3" replace>
                <h2>prod 3</h2>
            </Link>
            <Link href={`/product/${ProductID}`}>
                <h2>prod {ProductID}</h2>
            </Link>
        </>
    )
}

export default Product