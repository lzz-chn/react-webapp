import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './css/Home.css';
import config from './config';
import ReactSwiper from './Banner';
import { promised } from 'q';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'loading'
        };
        this.getApi();
    }
    getApi() {
        // 这里写请求的数据
        // 可以使用：ajax(原生ajax,jQuery ajax)、fetch
        const getWebsite = fetch(`${config.serverApi}/getWebsite`)
            .then(response => response.json())
            .then(myJson => myJson)
            .catch(error => console.error('Error:', error));

        const getNav = fetch(`${config.serverApi}/getNav?sort=banner`)
            .then(response => response.json())
            .then(myJson => myJson)
            .catch(error => console.error('Error:', error));

        const getAd = fetch(`${config.serverApi}/getAd`)
            .then(response => response.json())
            .then(myJson => myJson)
            .catch(error => console.error('Error:', error));

        const getArticleFree = fetch(`${config.serverApi}/getArticle?pid=77`)
            .then(response => response.json())
            .then(myJson => myJson)
            .catch(error => console.error('Error:', error));

        Promise.all([getWebsite, getNav, getAd, getArticleFree]).then(
            result => {
                const [website, getNav, ad, free] = result;
                this.setState({ website, getNav, ad, free, status: 'loadend' });
                // console.log(this.state);
            },
            error => {
                this.setState({ status: 'error' });
            }
        );
    }
    render() {
        let html;
        switch (this.state.status) {
            case 'loading':
                html = <div>数据正在加载</div>;
                break;
            case 'loadend':
                let { website, getNav, ad, free, status } = { ...this.state };
                // console.log(ad);
                config.setWeb(
                    website.title,
                    website.keywords,
                    website.description
                );
                html = (
                    <div className="Home">
                        <div className="Header">
                            <Link to={null}>
                                <img src={website.logo_mobile} alt="logo" />
                            </Link>
                            <div className="User">
                                <Link to={null}>
                                    <svg id="icon-person" viewBox="0 0 18 22">
                                        <path d="M9 20.5c5.633 0 7.5-.507 7.5-2.5 0-2.484-3.27-4.5-7.5-4.5S1.5 15.516 1.5 18c0 1.993 1.867 2.5 7.5 2.5zm0 1C2.742 21.5.5 20.892.5 18c0-3.164 3.787-5.5 8.5-5.5s8.5 2.336 8.5 5.5c0 2.892-2.242 3.5-8.5 3.5zm0-11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 1a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
                                    </svg>
                                </Link>
                                <Link to={null}>
                                    <svg id="icon-book" viewBox="0 0 18 16">
                                        <g>
                                            <path d="M.5 1h14C15.88 1 17 2.121 17 3.5 17 4.884 15.886 6 14.5 6H.5a.5.5 0 0 0 0 1h14C16.44 7 18 5.436 18 3.5 18 1.57 16.432 0 14.5 0H.5a.5.5 0 1 0 0 1z" />
                                            <path d="M1.146.854c.09.089.245.296.407.62C1.832 2.03 2 2.705 2 3.5c0 .795-.168 1.469-.447 2.026-.162.324-.318.531-.407.62l.708.708c.16-.161.38-.454.593-.88C2.793 5.28 3 4.455 3 3.5c0-.955-.207-1.781-.553-2.474C2.234.6 2.015.307 1.854.146l-.708.708zM17.5 9h-14C1.568 9 0 10.57 0 12.5 0 14.436 1.56 16 3.5 16h14a.5.5 0 1 0 0-1h-14A2.494 2.494 0 0 1 1 12.5C1 11.121 2.12 10 3.5 10h14a.5.5 0 1 0 0-1z" />
                                            <path d="M16.146 9.146c-.16.161-.38.454-.593.88-.346.693-.553 1.519-.553 2.474 0 .955.207 1.781.553 2.474.213.426.432.719.593.88l.708-.708c-.09-.089-.245-.296-.407-.62C16.168 13.97 16 13.295 16 12.5c0-.795.168-1.469.447-2.026.162-.324.318-.531.407-.62l-.708-.708z" />
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="Banner">
                            <ReactSwiper datas={getNav} />
                        </div>
                        <div className="Search">
                            <Link to={null}>
                                <svg id="icon-find" viewBox="0 0 16 15">
                                    <path d="M11.819 10.586l3.473 3.268a.548.548 0 0 1-.752.799l-3.46-3.256a6.579 6.579 0 1 1 .738-.81zM6.6 12.06a5.482 5.482 0 1 0 0-10.965 5.482 5.482 0 0 0 0 10.965z" />
                                </svg>
                                <span>傲气如我</span>
                            </Link>
                        </div>
                        <div className="NavList">
                            <Link to={null}>
                                <i className="NavIcon" />
                                <span>分类</span>
                            </Link>
                            <Link to={null}>
                                <i className="NavIcon" />
                                <span>排行榜</span>
                            </Link>
                            <Link to={null}>
                                <i className="NavIcon" />
                                <span>福利</span>
                            </Link>
                            <Link to={null}>
                                <i className="NavIcon" />
                                <span>新书</span>
                            </Link>
                            <Link to={null}>
                                <i className="NavIcon" />
                                <span>完本</span>
                            </Link>
                        </div>
                        <div className="Ad">
                            {ad[0] ? (
                                <Link to={null}>
                                    <img src={ad[0].img} alt="" />
                                </Link>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className="Hot">
                            <div className="Title">
                                <svg id="icon-mhot" viewBox="0 0 15 16">
                                    <path d="M12.808 3.42l.009-.005.069.12c1.18 1.791 1.83 3.888 1.752 5.883-.137 3.53-2.463 5.976-6.455 6.296l.006.052c-.662.086-1.245.057-1.739-.059-5.852-.602-7.775-7.442-3.574-12.23a.75.75 0 0 1 1.312.443c.105 1.527 1.739 2.705 3.251 2.505 1.597-.212 2.265-1.906 1.14-5.181-.23-.671.513-1.257 1.112-.877a10.772 10.772 0 0 1 3.117 3.053zm-1.204.897a9.655 9.655 0 0 0-1.061-1.323c.369 2.816-.75 4.632-2.907 4.918-1.783.236-3.632-.74-4.479-2.3-1.844 3.017-1.161 6.47 1.338 7.929-.004-.786.408-1.656 1.291-2.409.27-.229.619-.432 1.09-.652.386-.18 1.975-.826 2.29-.965 2.995-1.32 3.869-2.621 2.438-5.198zm1.517 4.21c-.668.917-1.81 1.682-3.351 2.361-.347.153-1.915.791-2.26.952-.36.168-.606.31-.751.434-.978.833-1.017 1.652-.156 1.94.245.026.497.038.759.036 3.688-.033 5.662-1.932 5.777-4.89.01-.275.004-.554-.018-.834z" />
                                </svg>
                                <span>热门小说</span>
                            </div>
                            <ul className="Content">
                                <li>
                                    <Link>
                                        <img src={null} alt="" />
                                    </Link>
                                    <h3>别靠近，我家沐少超凶的</h3>
                                    <p>
                                        前世，她被至亲利用，被朋友算计，穷困潦倒，却在临死前得知，那个她避之如蛇蝎的男人为了她，倾尽所有。重生后第一件事，就是致力于跟这个男人修复关系，本以为长路漫漫，却没料到，前世清冷禁欲的男人一反常态，把她撩得面红耳赤……至亲和朋友一如既往把她当傻瓜，她一边与他秀恩爱一边虐渣。厉小姐活得潇洒恣意，就连记者，都忍无可忍跑到沐少跟前告状……沐大总裁微微一笑，“我妻是这个世界上最善良，最可爱，最温柔的女子，
                                    </p>
                                    <div className="BookMate">
                                        <span>杨细细</span>
                                    </div>
                                </li>
                                <li>
                                    <Link>
                                        <img src={null} alt="" />
                                    </Link>
                                    <h3>别靠近，我家沐少超凶的</h3>
                                    <p>
                                        前世，她被至亲利用，被朋友算计，穷困潦倒，却在临死前得知，那个她避之如蛇蝎的男人为了她，倾尽所有。重生后第一件事，就是致力于跟这个男人修复关系，本以为长路漫漫，却没料到，前世清冷禁欲的男人一反常态，把她撩得面红耳赤……至亲和朋友一如既往把她当傻瓜，她一边与他秀恩爱一边虐渣。厉小姐活得潇洒恣意，就连记者，都忍无可忍跑到沐少跟前告状……沐大总裁微微一笑，“我妻是这个世界上最善良，最可爱，最温柔的女子，
                                    </p>
                                    <div className="BookMate">
                                        <span>杨细细</span>
                                    </div>
                                </li>
                                <li>
                                    <Link>
                                        <img src={null} alt="" />
                                    </Link>
                                    <h3>别靠近，我家沐少超凶的</h3>
                                    <p>
                                        前世，她被至亲利用，被朋友算计，穷困潦倒，却在临死前得知，那个她避之如蛇蝎的男人为了她，倾尽所有。重生后第一件事，就是致力于跟这个男人修复关系，本以为长路漫漫，却没料到，前世清冷禁欲的男人一反常态，把她撩得面红耳赤……至亲和朋友一如既往把她当傻瓜，她一边与他秀恩爱一边虐渣。厉小姐活得潇洒恣意，就连记者，都忍无可忍跑到沐少跟前告状……沐大总裁微微一笑，“我妻是这个世界上最善良，最可爱，最温柔的女子，
                                    </p>
                                    <div className="BookMate">
                                        <span>杨细细</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="Ad">
                            {ad[1] ? (
                                <Link to={null}>
                                    <img src={ad[1].img} alt="" />
                                </Link>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className="Free">
                            <div className="Title">
                                <svg id="icon-mhot" viewBox="0 0 15 16">
                                    <path d="M12.808 3.42l.009-.005.069.12c1.18 1.791 1.83 3.888 1.752 5.883-.137 3.53-2.463 5.976-6.455 6.296l.006.052c-.662.086-1.245.057-1.739-.059-5.852-.602-7.775-7.442-3.574-12.23a.75.75 0 0 1 1.312.443c.105 1.527 1.739 2.705 3.251 2.505 1.597-.212 2.265-1.906 1.14-5.181-.23-.671.513-1.257 1.112-.877a10.772 10.772 0 0 1 3.117 3.053zm-1.204.897a9.655 9.655 0 0 0-1.061-1.323c.369 2.816-.75 4.632-2.907 4.918-1.783.236-3.632-.74-4.479-2.3-1.844 3.017-1.161 6.47 1.338 7.929-.004-.786.408-1.656 1.291-2.409.27-.229.619-.432 1.09-.652.386-.18 1.975-.826 2.29-.965 2.995-1.32 3.869-2.621 2.438-5.198zm1.517 4.21c-.668.917-1.81 1.682-3.351 2.361-.347.153-1.915.791-2.26.952-.36.168-.606.31-.751.434-.978.833-1.017 1.652-.156 1.94.245.026.497.038.759.036 3.688-.033 5.662-1.932 5.777-4.89.01-.275.004-.554-.018-.834z" />
                                </svg>
                                <span>免费读书</span>
                            </div>
                            <ul>
                                {free.map((v, i) => (
                                    <li key={i}>
                                        <Link to={null}>
                                            <img src={v.img_path} alt="" />
                                        </Link>
                                        <h4>{v.title}</h4>
                                        <p>{v.author}</p>
                                    </li>
                                ))}
                                {/* // <li>
                                //     <Link to={null}>
                                //         <img src={free[0].img_path} alt="" />
                                //     </Link>
                                //     <h4>{free[0].title}</h4>
                                //     <p>{free[0].author}</p>
                                // </li>
                                // <li>
                                //     <Link to={null}>
                                //         <img src={free[1].img_path} alt="" />
                                //     </Link>
                                //     <h4>顾少的偏执宠爱</h4>
                                //     <p>小羊园长</p>
                                // </li>
                                // <li>
                                //     <Link to={null}>
                                //         <img src={free[2].img_path} alt="" />
                                //     </Link>
                                //     <h4>顾少的偏执宠爱</h4>
                                //     <p>小羊园长</p>
                                // </li>
                                // <li>
                                //     <Link to={null}>
                                //         <img src={free[3].img_path} alt="" />
                                //     </Link>
                                //     <h4>顾少的偏执宠爱</h4>
                                //     <p>小羊园长</p>
                                // </li> */}
                            </ul>
                        </div>
                    </div>
                );
                break;

            default:
                html = <div>数据加载错误</div>;
                break;
        }
        return <Router>{html}</Router>;
    }
}
export default Home;
