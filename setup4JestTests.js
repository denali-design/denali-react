import { render, shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.render = render;
global.shallow = shallow;
global.mount = mount;
