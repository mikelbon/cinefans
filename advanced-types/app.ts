class errorStatus
{
    type: "error";
    cod?:number;
}

class successStatus
{
    type: "success";
    code?:number;
    response?:string;
}
type Status = errorStatus | successStatus;

function get(status:Status)
{
    switch(status.type)
    {
        case 'success': console.log(status.response); break;
        case 'error': console.log(status.code); break;
    }
}

interface ErrorHandling
{
    success: boolean;
    error?: string;
}

interface GameData
{
    title:string;
}

interface ArtistData
{
    name:string;
}