<?php
    if ($_POST[coutnry] == 1) echo json_encode (array ('1'=> 'New York', '2'=> 'Californication'));
    else if ($_POST[coutnry] == 2) echo json_encode (array ('3'=> 'Киев', '4'=> 'Чоп'));
?>