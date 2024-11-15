import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import LatestNews from "../Components/LatestNews";
import LeftNavbar from "../ComponentLayout/LeftNavbar";
import MainContent from "../ComponentLayout/MainContent";
import RightNavbar from "../ComponentLayout/RightNavbar";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            Home
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto py-3">

                <Navbar></Navbar>

            </nav>
            <main className="grid md:grid-cols-12 w-11/12 mx-auto mt-8">
                <aside className="left col-span-3"><LeftNavbar></LeftNavbar></aside>
                <section className="col-span-6"><MainContent></MainContent></section>
                <aside className="col-span-3"><RightNavbar></RightNavbar></aside>
            </main>
        </div>
    );
};

export default HomeLayout;