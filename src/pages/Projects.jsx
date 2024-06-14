import './Projects.css'
import tagWords from  '../assets/tagWords.png';

const Projects = () => {
    return(
        <div className="Projects">
            <div className='title'>PROJECTS</div>
            <div className='projects_wrap'>
                <div className='project_card'>
                    <div className='imgArea'>
                        <div style={{background: `url(${tagWords}) no-repeat center/cover`, width:'100%', height: '100%', display: 'block'}}></div>
                    </div>
                    <div className='infoArea'>
                        <div className='project_title'>
                            끝 말 잇기
                        </div>
                        <div className='project_info'>
                            국립국어원 API를 활용한 끝말잇기 게임
                            <div className='btn_wrap'>
                                <button type='button'> 자세히 보기 </button>
                                <button type='button'> GitHub 바로가기 </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;