<?php
$myFile = "../data/leader.json"
$arr_data = array();
try
  {
$jsondata = file_get_contents($myFile); // this fetches your post action
// converts json data into array
	   $arr_data = json_decode($jsondata, true);

     $formdata = array(
       'username'=> $_POST['name'],
       'highscore'=> $_POST['score'],
       'userQ1'=>$_POST['q1'],
       'userQ2'=>$_POST['q2'],
       'userQ3'=>$_POST['q3'],
       'userQ4'=>$_POST['q4'],
       'userQ5'=>$_POST['q5']
    );

     // Push user data to array
	   array_push($arr_data,$formdata);
     $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
     if(file_put_contents($myFile, $jsondata)) {

	    }
	   else
	        echo "error";
        }
        catch (Exception $e) {
         echo 'Caught exception: ',  $e->getMessage(), "\n";
}

?>
