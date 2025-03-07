import Header from "@/components/header/Header"
import Showcase from "@/components/showcase/showcase"
import Logo from "@/assets/logoBlack.png";



const ShowCase = () => {
return(
<div className="bg-white container xl:container mx-auto">
<Header logo={Logo} />
<Showcase />
</div>
)
}

export default ShowCase