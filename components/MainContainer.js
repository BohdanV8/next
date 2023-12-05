import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"lab8, nextjs" + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div className="navbar">
                <A href={'/'} text="Головна сторінка"/>
                <A href={'/users'} text="Користувачі"/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background: red;
                        padding: 15px;
                    }
                   
                `}
            </style>
        </>
    );
};

export default MainContainer;
