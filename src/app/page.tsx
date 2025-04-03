import '../../public/assets/css/home.css';

export default function Home() {
    return (
        <>
            <div className="hero bg-cover bg-center flex items-center h-1/2" style={{ backgroundImage: "url('/assets/media/2.webp')" }}>
                <div className="container mx-auto">
                    <img className="drop-shadow-lg" width={600} src="https://www.rothecoder.com/assets/logo_typo/hello_bold_white.png" alt="hello" />
                </div>
            </div>

            <div className='w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 -mt-8 flex justify-between items-center'>
                <div className="_img shrink-0">
                    <img className='rounded-full' width={200} src="/assets/media/1.webp" alt="me" />
                </div>
                <div className='ms-10'>
                    <h1 className='font-bold mb-4 text-2xl'>My name is Vikasdeep Chaudhary!</h1>
                    <p>I am versatile, reliable, and a team leader. I am a people person with a passion for web development! Additionally, I have a knack for artwork and design.
                    To learn more about me, take a look at the links below! </p>
                    <div className='flex justify-around mt-5'>
                        <a href="https://www.linkedin.com/in/imvikasdeep/" target='_blank'>
                            <img width={30} height={30} src="https://cdn-icons-png.freepik.com/256/1384/1384014.png" alt="linked in" />
                        </a>
                        <a href="https://github.com/imvikasdeep" target='_blank'>
                            <img width={30} height={30} src="https://cdn-icons-png.freepik.com/256/733/733609.png" alt="Github" />
                        </a>
                        <a href="" target='_blank'>
                            <img width={30} height={30} src="https://cdn-icons-png.freepik.com/256/11546/11546643.png" alt="codepen" />
                        </a>
                        <a href="" target='_blank'>
                            <img width={30} height={30} src="https://cdn-icons-png.freepik.com/256/5969/5969020.png" alt="x.com" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
