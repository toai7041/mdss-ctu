
function Header() {
    return ( 
        <div className="header" id="visible">
        <div className="info">
          {/* <h5>Medical Diagnostic Support System</h5> */}
          <h5><b>HỆ THỐNG HỖ TRỢ CHẨN ĐOÁN Y KHOA</b></h5>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Tìm kiếm" />
          <button type="button" className="btn btn-primary">
            <i className="fa fa-search"> </i>
          </button>
        </div>
        
      </div>
    
     );
}

export default Header;