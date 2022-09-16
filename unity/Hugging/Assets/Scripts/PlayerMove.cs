using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;

public class PlayerMove : MonoBehaviourPunCallbacks
{
    public static VariableJoystick joystick;
    public Camera characterCamera;
    private Rigidbody rigid;
    public Animator anim;
    private Vector3 moveVec;
    public int speed;

    private void Awake()
    {
        rigid = GetComponent<Rigidbody>();
        anim = GetComponent<Animator>();
        if(photonView.IsMine) {
            Camera.main.gameObject.SetActive(false);
            characterCamera.gameObject.SetActive(true);
            joystick = GameObject.FindGameObjectWithTag("joystick").GetComponent<VariableJoystick>();
        }
    }

    private void FixedUpdate()
    {
        if(photonView.IsMine) {
            float x = joystick.Horizontal;    
            float z = joystick.Vertical;    

            moveVec = new Vector3(x, 0, z) * speed * Time.deltaTime;
            rigid.MovePosition(rigid.position + moveVec);

            if(moveVec.sqrMagnitude == 0) return;

            Quaternion dirQuat = Quaternion.LookRotation(moveVec);
            Quaternion moveQuat = Quaternion.Slerp(rigid.rotation, dirQuat, 2f);
            rigid.MoveRotation(moveQuat);
        }
    }

    private void LateUpdate()
    {
        if(photonView.IsMine) {
            anim.SetFloat("Move", moveVec.sqrMagnitude);
        }
    }

}