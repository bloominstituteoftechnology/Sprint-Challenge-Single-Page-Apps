import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const NextPrev = props => {
    console.log(props);
    return (
        <Pagination>
            <PaginationItem>
                <PaginationLink previous onClick={() => props.url(props.prev)} />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink next onClick={() => props.url(props.next)} />
            </PaginationItem>
        </Pagination>
    )
}

export default NextPrev;