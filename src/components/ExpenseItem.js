import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function ExpenseItem(params) {
  return (
    <div className="col-6">
      <div className="rounded shadow-sm bg-light border border-dark container-fluid">
        <div className="row">
          <div className="col-3">
            <div className="text-start py-2">{params.title}</div>
          </div>
          <div className="col-9">
            <div className="text-end py-2">{params.date}</div>
          </div>
          <div className="col-3">
            <div className="text-start py-2">
              {params.price + params.currency}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
