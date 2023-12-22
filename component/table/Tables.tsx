import { Table, Spinner } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { Tables } from "@/types/table/tables";

const Tables: React.FC<Tables> = ({ rows, columns, loading, children }) => {
    return (
        <section className="overflow-x-auto overflow-y-hidden">
        <Table striped className="">
            <Table.Head className="h-[50px] border-b">
            {columns.map((column: any, idx: number) => (
                <Table.HeadCell key={idx}>{column.label}</Table.HeadCell>
            ))}
            </Table.Head>

            <Table.Body className="divide-y border-b">
            {loading ? (
                <Table.Row className="bg-white py-1">
                <Table.Cell colSpan={columns.length} className="p-1 px-4">
                    <div className="flex justify-center items-center">
                    <Spinner aria-label="Loading" size="xl" />
                    </div>
                </Table.Cell>
                </Table.Row>
            ) : rows.length > 0 ? (
                <>
                {rows.map((row: any, idx: number) => (
                    <Table.Row key={idx} className="bg-white py-1">
                    {columns.map((column: any, colIdx: number) => (
                        <Table.Cell key={colIdx} className="p-1 px-4">
                        {row[column.accessor]}
                        </Table.Cell>
                    ))}
                    </Table.Row>
                ))}
                </>
            ) : (
                <Table.Row className="bg-white py-1">
                <Table.Cell colSpan={columns.length} className="p-1 px-4">
                    <div className="flex justify-center items-center">
                    <p className="py-2">Data tidak ada</p>
                    </div>
                </Table.Cell>
                </Table.Row>
            )}
            </Table.Body>
        </Table>

        <div className="flex py-3 justify-center items-center">{children}</div>
        </section>
    );
};

export default Tables;
