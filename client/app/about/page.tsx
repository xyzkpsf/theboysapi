export default function page() {
  return (
    <div className="w-full h-[calc(100vh-150px)] flex flex-col items-center overflow-auto">
      <div className="w-9/12 flex flex-col text-left items-start">
        <div className="pageTitle">About</div>
        <div className="subTitle">Who</div>
        <div className="paragraph">
          My name is Xiaoyi Zhu, a developer based in San Francisco Bay Area. I
          am currently working at FreeAgent CRM. Feel free to send me an email
          if you have any questions or thoughts on this API.
        </div>
        <div className="subTitle">What</div>
        <div className="subTitle">Why</div>
        <div className="subTitle">Copyright</div>
      </div>
    </div>
  );
}
