import React, {useState} from 'react';
import Dropdown from 'react-dropdown'

const Medications = () => {
    const [text, setText] = useState('');

    const data = [
        {   disease: "Acne",
            writeup:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit iaculis ex, a luctus odio vulputate sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec sapien a nibh sodales sollicitudin id eu arcu. Donec tempor nec nunc id suscipit. Nunc et congue arcu. Fusce non laoreet magna. Mauris sodales massa at consectetur convallis. Quisque molestie, tellus in tristique vulputate, tortor ligula elementum dui, at porttitor turpis arcu in arcu. Nunc volutpat nunc eget orci consectetur, tristique mollis diam fringilla. Duis a tempus orci, non eleifend metus. Etiam risus mi, faucibus sed placerat a, sodales sed sem. Sed sed venenatis quam. Phasellus gravida ipsum velit, vitae semper massa commodo sit amet. Nulla quis malesuada lacus. Praesent pulvinar fermentum purus, sed imperdiet arcu elementum condimentum. Proin pellentesque neque quis nisi scelerisque posuere id vel arcu. "},
        {   disease: "Eczema",
            writeup:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut molestie diam, lobortis pellentesque ipsum. Curabitur vitae venenatis nisi. Nulla facilisi. Sed purus leo, blandit eget nisi in, pellentesque ornare risus. Praesent at purus id dolor maximus condimentum. Vestibulum imperdiet nulla eu leo pharetra aliquet vel sit amet dui. Curabitur auctor erat orci, sit amet ullamcorper odio suscipit sed. Morbi egestas felis magna, eu tincidunt ante sodales condimentum. Aenean aliquam tincidunt iaculis. "},
        {   disease: "Hives",
            writeup:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id maximus quam, venenatis tempus est. Integer faucibus semper erat eu aliquam. Quisque varius arcu sed posuere condimentum. Aliquam at urna diam. Nam sed sem nunc. Aliquam urna risus, laoreet ac mollis vitae, ultricies non dolor. Nunc malesuada libero nec faucibus convallis. Vestibulum bibendum purus odio, vitae vestibulum felis vehicula non. Vestibulum et dui semper, congue nulla non, cursus est. Duis eleifend tellus in nibh fringilla, sed malesuada nisl pellentesque. Cras quis quam in mauris cursus tincidunt eget ut augue. Curabitur convallis, lectus vel dapibus ultricies, leo erat dapibus tortor, eu volutpat neque enim et metus. Proin rhoncus, dui ac mollis interdum, metus neque faucibus felis, et imperdiet arcu orci ac justo. Aliquam semper congue bibendum. Pellentesque maximus ante ante, non vestibulum mi suscipit laoreet. Sed risus mi, aliquet et finibus et, hendrerit vitae erat. "}
    ];





    return (
        <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                {Object.keys(data).map(key => { return <option key={key} onClick={() => (setText(data[key].writeup))} >{data[key].disease}</option>})}
            </select>
            <p>{text}</p>
        </div>
    );
};

export default Medications;