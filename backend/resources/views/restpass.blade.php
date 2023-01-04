<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Reset Password</title>
</head>
<body style="margin:100px">
    <h1>{{title}}</h1>
    <hr>
    <p> {{$message}}</p>
    <h6>
        <a href="{{$url}}/api/reset/{{$token}}">Click Here to reset password</a>
    </h6>

    
</body>
</html>