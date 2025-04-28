const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot7u1602vl/",
            name: "springboot7u1602vl",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot7u1602vl/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高校学科竞赛系统的设计与实现"
        } 
    }
}
export default base
