import React from 'react';

interface ServerLogProps {
  logs: string[][];
}

const ServerLog = (props: ServerLogProps) => {
  return (
    <div className="dataTables_wrapper form-inline dt-bootstrap no-footer">
      <div className="row">
        <div className="col-sm-6"></div>
        <div className="col-sm-6">
          <div className="dataTables_filter">
            <label>検索:<input type="search" className="form-control input-sm" /></label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="dataTables_scroll">
            <div
              className="dataTables_scrollHead"
              style={{
                overflow: 'hidden',
                position: 'relative',
                border: 0,
                width: '100%'
              }}
            >
              <div
                className="dataTables_scrollHeadInner"
                style={{
                  boxSizing: 'content-box',
                  width: 726,
                  paddingRight: 0
                }}
              >
                <table
                  className="table table-hover table-condensed dataTable no-footer"
                  style={{ marginLeft: 0, width: 726 }}
                >
                  <thead>
                    <tr>
                      <th style={{ width: 47 }}>時刻</th>
                      <th style={{ width: 16 }}>類</th>
                      <th style={{ width: 600 }}>ログ</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            <div
              className="dataTables_scrollBody"
              style={{
                position: 'relative',
                overflow: 'auto',
                maxHeight: 10000,
                width: '100%',
                // TODO: Set the height dynamically
              }}
            >
              <table
                className="table table-hover table-condensed dataTable no-footer"
                style={{ width: '100%' }}
              >
                <thead>
                  <tr style={{ height: 0 }}>
                    <th

                      style={{
                        width: 47,
                        paddingTop: 0,
                        paddingBottom: 0,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        height: 0
                      }}
                    >
                      <div
                        className="dataTables_sizing"
                        style={{ height: 0, overflow: 'hidden' }}
                      >時刻</div>
                    </th>
                    <th style={{
                      width: 16,
                      paddingTop: 0,
                      paddingBottom: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      height: 0
                    }}>
                      <div
                        className="dataTables_sizing"
                        style={{ height: 0, overflow: 'hidden' }}
                      >類</div>
                    </th>
                    <th style={{
                      width: 600,
                      paddingTop: 0,
                      paddingBottom: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      height: 0
                    }}
                    >
                      <div
                        className="dataTables_sizing"
                        style={{ height: 0, overflow: 'hidden' }}
                      >ログ</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.logs.map(log => (
                    <tr>
                      <td>{log[0]}</td>
                      <td>{log[1]}</td>
                      <td>{log[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-5"></div>
        <div className="col-sm-7">
          <div className="dataTables_paginate paging_numbers">
            <ul className="pagination">
              <li className="paginate_button active">
                <a href="#">1</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerLog;
