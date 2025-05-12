import Header from '../components/Header.';
import Card from '../components/Card';
import TodoContainer from '../components/TodoContainer';
import { useLocation } from 'react-router-dom';


function Landing() {

    const data = useLocation()

    return (
        <div className="bg-black p-10">
            <div className="bg-white p-6 border rounded">

                {/* Header */}
                <Header name={data.state.user} />

                {/* Card Section */}
                <div className="sm:block md:flex justify-between flex-wrap gap-5 my-3 ">
                    <Card bgColor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
                    <Card bgColor={"#FD6663"} title={"December"} subtitle={"14.10.2025"} />
                    <Card bgColor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
                </div>

                {/* TodoContainer section */}
                <TodoContainer />

            </div>
        </div>
    )
}

export default Landing