// import Header from "@/components/header/Header"
import Showcase from "@/components/showcase/showcase"
import Head from "next/head"
// import Logo from "@/assets/logoBlack.png";



const ShowCase = () => {
return(
<>
<Head>
<meta name="robots" content="index, follow" />
<title>Weblibron - Portfolio</title>  
</Head>
<div className="bg-white container xl:container mx-auto">
<Showcase />
</div>
</>

)
}

export default ShowCase