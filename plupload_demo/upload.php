<?php
header('Access-Control-Allow-Origin: *');
$uploaddir = '/data/webroot/wangkongming/usr/uploads/img_test/';
$uploadfile = $uploaddir . basename($_FILES['file']['name']);

if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile)) {
    $img_url = str_replace('/data/webroot/wangkongming','http://www.wangkongming.cn',$uploadfile);
    $result['data'] = array(
        'url' => $img_url,
        'msg' => 'success',
        'status' => true,
    );
} else {
    $result = array(
        'data' => array(),
        'msg' => '',
        'status' => false
    );
}
echo json_encode($result);