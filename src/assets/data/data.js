import html from "../icons/icon-html.svg";
import css from "../icons/icon-css.svg";
import react from "../icons/icon-react.svg";
import storybook from "../icons/icon-storybook.svg";
import scss from "../icons/icon-scss.svg";
import photoshop from "../icons/icon-photoshop.svg";
import illustrator from "../icons/icon-illustrator.svg";
import figma from "../icons/icon-figma.svg";
import zeplin from "../icons/icon-zeplin.svg";
import vscode from "../icons/icon-vscode.svg";
import git from "../icons/icon-git.svg";
import gulp from "../icons/icon-gulp.svg";
import jira from "../icons/icon-jira.svg";
import confluence from "../icons/icon-confluence.svg";
import weddingwebp from "../images/wedding.webp";
import wedding from "../images/wedding.jpg";
import portfolio2023webp from "../images/portfolio2022.webp";
import portfolio2023 from "../images/portfolio2022.jpg";
import portfolio2021webp from "../images/portfolio2021.webp";
import portfolio2021 from "../images/portfolio2021.jpg";
import PopupTason from "../../components/popups/PopupTason";
import PopupMarkupGuide from "../../components/popups/PopupMarkupGuide";
import PopupHumuson from "../../components/popups/PopupHumuson";
import PopupTargetmarketing from "../../components/popups/PopupTargetmarketing";
import PopupKyobo from "../../components/popups/PopupKyobo";
import PopupBookList from "../../components/popups/PopupBookList";
import PopupCoffee from "../../components/popups/PopupCoffee";
import PopupXeboard from "../../components/popups/PopupXeboard";
import PopupTonyryu from "../../components/popups/PopupTonyryu";
import PopupUniuni from "../../components/popups/PopupUniuni";

const sectionIds = ["main", "about", "stack", "work", "contact"];

const aboutData = [
    {
        title: '경력',
        items: [
            { company: '휴머스온', role: '프런트엔드개발파트 퍼블리셔', date: '2022.11 - 2023.12' },
            { company: '교보문고', role: 'CX혁신팀 퍼블리셔', date: '2022.07 - 2022.11' },
            { company: '티몬', role: '마크업 개발팀 마크업 개발자', date: '2021.02 - 2022.06' },
            { company: '엑스이허브', role: 'UI개발팀 퍼블리셔', date: '2020.03 - 2021.01' },
        ],
    },
    {
        title: '자격증',
        items: [
            { certification: 'GTQ 1급', authority: '한국생산성본부', date: '2016.06.17' },
            { certification: '컴퓨터그래픽스기능사', authority: '한국산업인력공단', date: '2014.06.27' },
            { certification: '웹디자인기능사', authority: '한국산업인력공단', date: '2014.06.27' },
        ],
    },
    {
        title: '교육',
        items: [
            { institution: '패스트 캠퍼스', program: 'Web 개발 취업 스쿨(HTML/CSS/JS) 1학기 수료' },
            { institution: '하이미디어 아카데미', program: '반응형 디자인 웹퍼블리셔반 수료' },
            { institution: '가천대학교', program: '시각디자인과 졸업' },
        ],
    },
];

const skillsData = [
    'HTML',
    'CSS',
    'SCSS',
    'React',
    'Storybook',
    'Git',
    'Jira',
    'Confluence',
    'Gulp',
    'Photoshop',
    'Illustrator',
];

const stacksData = [
    {
        title: 'Front-End',
        points: [
            '협업을 위하여 재활용하기 쉽고 유지보수하기 용이한 코드를 짤 수 있도록 노력하고 여러 방법에 대해 고민합니다.',
            '보여지는 것만이 아닌 페이지의 구조와 태그의 의미를 고려하여 마크업을 작성하는 것을 지향합니다.',
            '웹표준, 웹 접근성에 맞춰 마크업을 작성하며, 항상 크로스 브라우징 체크를 진행합니다.',
            'CSS 전처리기기 SCSS 활용 가능하며, SCSS의 여러 기능들을 사용하려 노력합니다.',
            'React.js를 활용한 컴포넌트 형식의 퍼블리싱이 가능합니다.',
            'Storybook을 활용하여 디자인 가이드 형식의 컴포넌트 형태의 마크업을 작성할 수 있습니다.',
        ],
        icons: [
            html, css, react, scss, storybook
        ]
    },
    {
        title: 'Design',
        points: [
            '포토샵 및 일러스트레이터를 활용하여 디자인 및 편집을 작업할 수 있습니다.',
            '피그마를 활용하여 UX/UI 설계 및 프로토 타이핑이 가능합니다.',
            '애프터 이펙트 및 프리미어를 활용하여 기초적인 영상 작업이 가능합니다.',
        ],
        icons: [
            photoshop, illustrator, figma, zeplin
        ]
    },
    {
        title: 'Tools',
        points: [
            'Visual Studio Code, Web Storm을 주로 사용하고 있습니다.',
            'git을 이용한 형상관리를 통하여 협업을 진행할 수 있습니다.',
            'gulp의 문법을 이해하고 기초적인 세팅을 할 수 있습니다.',
            'npm을 활용하여 원하는 패키지 등을 설치하고 활용할 수 있습니다.',
            'Jira 및 Confluence를 활용하여 다른 사람과 협업하고 스케줄링하며, 문서를 공유할 수 있습니다.',
        ],
        icons: [
            vscode, git, gulp, jira, confluence
        ]
    },
];

const workData = [
    {
        webpSource: weddingwebp,
        imageSource: wedding,
        altText: '개인 모바일 웨딩 청첩장 화면',
        title: '모바일 웨딩 청첩장',
        period: '2024.01',
        contribution: '100%',
        description: '리액트 환경에서 퍼블리싱 작업하였으며 방명록의 경우 파이어 베이스를 활용하였습니다. 현재 깃허브 페이지에 배포한 상태입니다.',
        link: 'https://mingdangworld.dev/',
    },
    {
        webpSource: portfolio2023webp,
        imageSource: portfolio2023,
        altText: '개인 포트폴리오 사이트 (2022) 화면',
        title: '개인 포트폴리오 사이트 (2022)',
        period: '2022.08',
        contribution: '100%',
        description: '개인 포트폴리오 사이트 2022 버전입니다. 동일한 디자인의 리액트 버전은 깃허브에서 확인하실 수 있습니다.',
        link: 'https://mjaedot.com/portfolio2022/',
    },
    {
        webpSource: portfolio2021webp,
        imageSource: portfolio2021,
        altText: '개인 포트폴리오 사이트',
        title: '개인 포트폴리오 사이트 (2021)',
        period: '2021.12',
        contribution: '100%',
        description: '개인 포트폴리오 사이트 2021 버전입니다.',
        link: 'https://mjaedot.com/portfolio2021/',
    },
];

const popupData = [
    { id: 1, class:"tason", text: "타스온 소개 페이지 리뉴얼", contents: <PopupTason />, isOpen: false },
    { id: 2, class:"markup_guide", text: "마크업 가이드", contents: <PopupMarkupGuide />, isOpen: false },
    { id: 3, class:"humuson", text: "휴머스온", contents: <PopupHumuson />, isOpen: false },
    { id: 4, class:"targetmarketing", text: "타겟 마케팅 솔루션", contents: <PopupTargetmarketing />, isOpen: false },
    { id: 5, class:"kyobo", text: "교보문고 신입사원 부트캠프 과제", contents: <PopupKyobo />, isOpen: false },
    { id: 6, class:"interaction_booklist", text: "연습용 인터랙션 페이지", contents: <PopupBookList />, isOpen: false },
    { id: 7, class:"interaction_coffee", text: "연습용 인터랙션 페이지", contents: <PopupCoffee />, isOpen: false },
    { id: 8, class:"xe_board", text: "XE3 게시판 스킨", contents: <PopupXeboard />, isOpen: false },
    { id: 9, class:"tonyryu", text: "건승정한", contents: <PopupTonyryu />, isOpen: false },
    { id: 10, class:"uniuni", text: "UNIUNI", contents: <PopupUniuni />, isOpen: false },
]

export {
    sectionIds, aboutData, skillsData, stacksData, workData, popupData
}