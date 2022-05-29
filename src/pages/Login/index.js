import style from './Login.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ab = classNames.bind(style);

function Login() {
    return (
        <div className={ab('wrapper')}>
            <div className={ab('col')}>
                <div className={ab('header')}>
                    <div class={ab('logo')}>
                        <a href="">
                            <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/1/1b/T%C4%90T_logo.png/200px-T%C4%90T_logo.png" />
                        </a>
                    </div>
                    <h2 className={ab('title')}>Chào mừng bạn trở lại,</h2>
                    <div className={ab('caption')}>
                        Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
                    </div>
                </div>
                <div className={ab('login')}>
                    <form action="" method="POST" id="form-login">
                        <div className={ab('form-group')}>
                            <label for="email" className={ab('text-label')}>
                                Email
                            </label>
                            <div className={ab('input-group')}>
                                <div className={ab('input-group-pre')}>
                                    <span className={ab('input-group-text')}>
                                        <FontAwesomeIcon
                                            className={ab('icon-group')}
                                            icon={faEnvelope}
                                        ></FontAwesomeIcon>
                                    </span>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    class={ab('form-control')}
                                    placeholder="Nhập email của bạn"
                                />
                            </div>
                        </div>
                        <div className={ab('form-group')}>
                            <label for="password" className={ab('text-label')}>
                                Password
                            </label>
                            <div className={ab('input-group')}>
                                <div className={ab('input-group-pre')}>
                                    <span className={ab('input-group-text')}>
                                        <FontAwesomeIcon className={ab('icon-group')} icon={faKey}></FontAwesomeIcon>
                                    </span>
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    className={ab('form-control')}
                                    placeholder="Nhập password của bạn"
                                />
                            </div>
                        </div>
                        <div className={ab('form-group-1')}>
                            <button type="submit" class={ab('btn')}>
                                Đăng nhập
                            </button>
                            <p>Hoặc</p>
                        </div>
                        <div className={ab('login-social-media')}>
                            <a href="https://www.facebook.com/" className={ab('btn-fb')}>
                                <FontAwesomeIcon className={ab('brand-fb')} icon={faFacebookSquare}></FontAwesomeIcon>
                                <span>Facebook</span>
                            </a>
                            <a href="https://accounts.google.com/" className={ab('btn-gg')}>
                                <FontAwesomeIcon className={ab('brand-gg')} icon={faGoogle}></FontAwesomeIcon>
                                <span>Google</span>
                            </a>
                            <a href="https://www.linkedin.com/login" className={ab('btn-ld')}>
                                <FontAwesomeIcon className={ab('brand-ld')} icon={faLinkedin}></FontAwesomeIcon>
                                <span>Linkedin</span>
                            </a>
                        </div>
                    </form>
                    <div className={ab('content-between')}>
                        <div>
                            <span>Bạn chưa có tài khoản? </span>
                            <a href="">Đăng ký ngay</a>
                        </div>
                        <a href="">Quên mật khẩu</a>
                    </div>
                    <div className={ab('support-text')}>
                        <p className={ab('q-support')}>Bạn gặp khó khăn khi tạo tài khoản? </p>
                        <p className={ab('phone-support')}>Vui lòng gọi tới số 0853979020 (giờ hành chính).</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
