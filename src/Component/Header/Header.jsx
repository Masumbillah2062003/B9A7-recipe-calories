import profile from '../../assets/images/profile.png';
import './Header.css'

const Header = () => {

    return (
        <header className="container mx-auto lg:mt-12">
        {/* navbar part */}
            <nav className="navbar flex justify-between bg-base-100">
                <div className="">
                    <a className="btn btn-ghost  lg:text-3xl font-bold ">Recipe Calories</a>
                </div>
                <div className='hidden lg:block'>
                    <ul className='flex items-center text-[#150B2BB3] text-base gap-12'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Recipes</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Search</a></li>
                    </ul>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                    <div role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={profile} />
                        </div>
                    </div>
                    <ul  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                    </div>
                </div>
            </nav>

        {/* banner part */}
            <div className='bg lg:text-white w-full lg:h-[699px] text-center rounded-3xl mt-12 flex justify-center items-center'>
                    <div>
                        <h1 className='lg:text-5xl text-3xl font-bold lg:leading-[76px]'>Discover an exceptional cooking <br /> class tailored for you!</h1>
                        <p className='font-medium lg:text-xl mt-7 lg:leading-8'>
                        Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.
                        </p>
                        <div className='font-semibold lg:text-xl lg:mt-11 mt-6 space-x-7'>
                            <button className='btn bg-[#0BE58A] hover:bg-transparent border-2 border-[#0BE58A] hover:text-[#0BE58A] text-black rounded-[50px]'>Explore Now</button>
                            <button className='btn bg-transparent border-2 lg:text-white text-[#0BE58A] lg:border-transparent border-[#0BE58A] hover:bg-transparent rounded-[50px]'>Our Feedback</button>
                        </div>
                    </div>
            </div>
        </header>
    );
};

export default Header;