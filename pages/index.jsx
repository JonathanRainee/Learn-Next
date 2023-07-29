import Link from 'next/link'
import { useRouter } from 'next/router'

function Home(){

    const router = useRouter()

    const handleClick = () => {
        console.log("placing your order")
        router.replace('/product')
    }

    return(
        <div>
            <h1>homepage</h1>
            <Link href="/blog">
                {/* gsb taro tag a */}
                {/* <a id="link">blog</a> */}
                <p>blog</p>
            </Link>
            <Link href="/product">
                <p>product</p>
            </Link>
            <button onClick={handleClick}>
                Place order
            </button>
        </div>
    )
}

export default Home