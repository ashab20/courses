import { Link } from 'react-router-dom';
// import {faChevronCircleDown, faChevronCircleUp} from '@fortawesome/ssfree-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CoursesProps {
    id:number;
    course_name: string;
        thumbnile: string;
        description: string;
        duration: string;
        start_date: string;
        end_date: string;
        price: number;
}


const Courses = ({course}) => {

    const { id,course_name,thumbnile, description, duration, start_date, end_date, price} = course;
    
    return (
        <div className="w-full max-w-sm bg-green-500 rounded-b-md transition-all justify-items-start text-left rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/courses/${id}`}>
                <img className="rounded-t-lg" src={thumbnile} alt={course_name}/>
            </Link>
            <div className="px-5 pb-5">
                <Link to={`/courses/${id}`}>
                    <h5 className="text-xl font-semibold tracking-tight text-white dark:text-white uppercase my-2 text-center">{course_name}</h5>
                </Link>
                <div className="flex items-center mt-2.5 mb-5 text-center text-gray-100 text-base">
                    {description}
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-yellow-400 dark:text-white">{price}BDT</span>
                    <Link to={`/apply/${id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply</Link>
                </div>
            </div>
        </div>
        
        )
    }

export default Courses;