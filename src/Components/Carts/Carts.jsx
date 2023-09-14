/* eslint-disable react/prop-types */

import Cart from "../Cart/Cart";


const Carts = ({courses, addCredit, remainingCredit}) => {
    return (
        <div className="">
            <div className="bg-[#efefef] p-2 rounded-xl">
                <h3 className="text-[#2F80ED] pb-2 border-b-2 font-bold text-lg">Course Hour Remaining {remainingCredit}hr</h3>
                <div>
                    <h3 className="font-bold text-lg my-2">Course Name</h3>
                    <div className="pb-2 border-b-2 text-[rgba(28,27,27,0.6)]">
                        <ul>
                        {
                            courses.map((course, idx) =><li key={idx}><Cart course={course}></Cart></li>)
                        }
                        </ul>
                    </div>
                    <p className="py-2 text-[rgba(28,27,27,0.6)] font-semibold border-b-2">Total Credit Hour: {addCredit}</p>
                    <p className="py-2 text-[rgba(28,27,27,0.6)] font-semibold">Total Price: </p>
                </div>
            </div>   

        </div>
    );
};

export default Carts;