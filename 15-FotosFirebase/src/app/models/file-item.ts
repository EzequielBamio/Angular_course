export class FileItem
{
    public file        : File;
    public fileName    : string;
    public url         : string;
    public isUploading : boolean;
    public progress    : number | undefined;

    constructor( file: File )
    {
        this.file        = file;
        this.fileName    = file.name;
        this.url         = '';
        this.isUploading = false;
        this.progress    = 0;
    }
}

export class firebase{};