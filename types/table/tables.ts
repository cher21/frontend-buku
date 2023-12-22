export interface Column {
    label: string;
    accessor: string;
}

export interface Row {
    [key: string]: any;
}

export interface Tables {
    rows: Row[];
    columns: Column[];
    loading: boolean;
    children?: any;
    // Add a loading prop
}
