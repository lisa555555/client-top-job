import style from './Register.module.scss';
import axios from 'axios';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ab = classNames.bind(style);

function Register() {
    const [userInput, setUserInput] = useState({});
    console.log(userInput);
    const onSubmitHandle = async (e) => {
        try {
            e.preventDefault();
            console.log('ok');
            const option = {
                method: 'post',
                url: '/api/v1/user/register/',
                data: userInput,
            };
            const response = await axios(option);
        } catch (error) {}
    };

    return (
        <div className={ab('wrapper')}>
            <div className={ab('col')}>
                <div className={ab('header')}>
                    <div className={ab('logo')}>
                        <a href="">
                            <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/1/1b/T%C4%90T_logo.png/200px-T%C4%90T_logo.png" />
                        </a>
                    </div>
                    <h2 className={ab('title')}>Chào mừng bạn đến với TopJobTDTU,</h2>
                    <div className={ab('caption')}>
                        Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
                    </div>
                </div>
                <div className={ab('login')}>
                    <form onSubmit={onSubmitHandle} id="form-login">
                        <div className={ab('form-group')}>
                            <label for="name" className={ab('text-label')}>
                                Họ và tên
                            </label>
                            <div className={ab('input-group')}>
                                <div className={ab('input-group-pre')}>
                                    <span className={ab('input-group-text')}>
                                        <FontAwesomeIcon className={ab('icon-group')} icon={faUser} />
                                    </span>
                                </div>
                                <input
                                    type="name"
                                    name="name"
                                    className={ab('form-control')}
                                    placeholder="Nhập họ và tên của bạn"
                                    onChange={(e) => setUserInput({ ...userInput, [e.target.name]: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className={ab('form-group')}>
                            <label for="email" className={ab('text-label')}>
                                Email
                            </label>
                            <div className={ab('input-group')}>
                                <div className={ab('input-group-pre')}>
                                    <span className={ab('input-group-text')}>
                                        <FontAwesomeIcon className={ab('icon-group')} icon={faEnvelope} />
                                    </span>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    className={ab('form-control')}
                                    placeholder="Nhập email của bạn"
                                    onChange={(e) => setUserInput({ ...userInput, [e.target.name]: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className={ab('form-group')}>
                            <label for="password" className={ab('text-label')}>
                                Mật khẩu
                            </label>
                            <div className={ab('input-group')}>
                                <div className={ab('input-group-pre')}>
                                    <span className={ab('input-group-text')}>
                                        <FontAwesomeIcon className={ab('icon-group')} icon={faKey} />
                                    </span>
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    className={ab('form-control')}
                                    placeholder="Nhập mật khẩu"
                                    onChange={(e) => setUserInput({ ...userInput, [e.target.name]: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className={ab('form-group')}>
                            <label for="password" className={ab('text-label')}>
                                Xác nhận mật khẩu
                            </label>
                            <div className={ab('input-group')}>
                                <div className={ab('input-group-pre')}>
                                    <span className={ab('input-group-text')}>
                                        <FontAwesomeIcon className={ab('icon-group')} icon={faKey} />
                                    </span>
                                </div>
                                <input
                                    type="password2"
                                    name="password2"
                                    className={ab('form-control')}
                                    placeholder="Nhập lại mật khẩu"
                                    onChange={(e) => setUserInput({ ...userInput, [e.target.name]: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className={ab('text-agreed')}>
                            <p className={ab('text-normal')}>
                                Bằng việc đăng ký tài khoản,bạn đã đồng ý với '
                                <a href="" className={ab('text-highlight')}>
                                    Điều khoản dịch vụ
                                </a>
                                ' và '
                                <a href="" className={ab('text-highlight')}>
                                    Chính sách bảo mật
                                </a>
                                ' của chúng tôi
                            </p>
                        </div>
                        <div className={ab('form-group-1')}>
                            <button type="submit" className={ab('btn')}>
                                Đăng ký
                            </button>
                        </div>
                    </form>
                    <div className={ab('content-between')}>
                        <div>
                            <span>Bạn đã có tài khoản? </span>
                            <a href="http://localhost:3000/login">Đăng nhập ngay</a>
                        </div>
                    </div>
                    <div className={ab('support-text')}>
                        <p className={ab('q-support')}>Bạn gặp khó khăn khi tạo tài khoản? </p>
                        <p className={ab('phone-support')}>Vui lòng gọi tới số 0853979020 (giờ hành chính).</p>
                    </div>
                </div>
            </div>
            <div className={ab('carousel')}>
                <img src="https://file1.hutech.edu.vn/file/editor/tuyensinh/nganh-cong-nghe-thong-tin-la-gi-ra-truong-lam-gi-hutech2.JPG" />
            </div>
        </div>
    );
}

export default Register;
