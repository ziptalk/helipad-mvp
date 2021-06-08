import styled from "styled-components";
const All = ({ location }: any) => {
  console.log("location.state:", location.state);
  return (
    // <section>
    //   <h3>SchoolNearby</h3>
    //   <div className="categoryBlock">
    //     <div className="category"></div>
    //     <div className="divider"></div>
    //     <div className="category"></div>
    //     <div className="divider"></div>
    //     <div className="category"></div>
    //     <div className="divider"></div>
    //     <div className="category"></div>
    //     <div className="divider"></div>
    //   </div>
    //   <div className="contentBlock">
    //     <div>
    //       <div>School</div>
    //       <div>
    //         <div>Type</div>
    //         <div>Grades</div>
    //         <div>Distance</div>
    //         <div>Rating</div>
    //       </div>
    //     </div>
    //     <div className="contentBlock">
    //       <div>school</div>
    //       <div>
    //         <div>type</div>
    //         <div>grades</div>
    //         <div>distance</div>
    //         <div>rating</div>
    //       </div>
    //     </div>
    //     <div className="contentBlock">
    //       <div>school</div>
    //       <div>
    //         <div>type</div>
    //         <div>grades</div>
    //         <div>distance</div>
    //         <div>rating</div>
    //       </div>
    //     </div>
    //     <div className="contentBlock">
    //       <div>school</div>
    //       <div>
    //         <div>type</div>
    //         <div>grades</div>
    //         <div>distance</div>
    //         <div>rating</div>
    //       </div>
    //     </div>
    //     <div className="contentBlock">
    //       <div>school</div>
    //       <div>
    //         <div>type</div>
    //         <div>grades</div>
    //         <div>distance</div>
    //         <div>rating</div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section>
      <Table>
        <TR>
          <TH>School</TH>
          <TH>Type</TH>
          <TH>Grades</TH>
          <TH>Distance</TH>
          <TH>Rating</TH>
        </TR>
        <TR>
          <TD>Temple Emanuel Academy Day School</TD>
          <TD>Private</TD>
          <TD>PK-6</TD>
          <TD>0.5 mi</TD>
          <TD>NR</TD>
        </TR>
        <TR>
          <TD>Hawthorne Elementary School</TD>
          <TD>Public</TD>
          <TD>K-8</TD>
          <TD>0.7 mi</TD>
          <TD>NR</TD>
        </TR>
        <TR>
          <TD>Kabbalah Children's Academy</TD>
          <TD>Private</TD>
          <TD>K-8</TD>
          <TD>0.9 mi</TD>
          <TD>NR</TD>
        </TR>
        <TR>
          <TD>Good Shepherd Catholic School</TD>
          <TD>Private</TD>
          <TD>K-8</TD>
          <TD>0.9 mi</TD>
          <TD>NR</TD>
        </TR>
      </Table>
    </section>
  );
};
const Table = styled.table`
  display: table;
  border-spacing: 2px;
  border-color: grey;
  border: 1px solid #bcbcbc;
  width: 100%;
  border-collapse: collapse;
`;
const TH = styled.th`
  height: 40px;
  background-color: lightgray;
`;
const TR = styled.tr`
  border: 1px solid #bcbcbc;
`;
const TD = styled.td`
  text-align: center;
  height: 40px;
  border-top: 1px solid #bcbcbc;
  border-bottom: 1px solid #bcbcbc;
`;
export default All;
