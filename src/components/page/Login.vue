<template>
    <div class='body'>
        <div class='mnb'></div>
        <div class="login_contain login_information" v-bind:class="{isShow: isloginHide}">
            <div class='headIcon'>
                <img src='../../assets/img/icon.png'>
                <div>I SEER</div>
            </div>
            <div style='margin-top: 36px;margin-bottom: 60px;'>
                <div class='otherInfo registration_btn' @click="toReg">还没有账户?<a>立即注册</a></div>
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="itemValue">
                <el-form-item prop="name" class='setValue'>
                    <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
                    <i class='iconfontmv mvyonghuming'></i>
                </el-form-item>
                <el-form-item prop="passw" class='setValue'>
                    <el-input autocomplete="off" v-model="ruleForm.passw" placeholder="请输入密码名"></el-input>
                    <i class='iconfontmv mvmima'></i>
                </el-form-item>
                <el-form-item class='setValue' prop="type">
                    <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="七日内免登陆" name="type"></el-checkbox>
                    </el-checkbox-group>
                    <a class='forget' >忘记密码</a>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="login_contain login_information" v-bind:class="{isShow: !isloginHide}">
            <div class='headIcon'>
                <img src='../../assets/img/icon.png'>
                <div>I SEER</div>
            </div>
            <div style='margin-top: 36px;margin-bottom: 60px;'>
                <div class='otherInfo registration_btn' @click="tologin">已经有账户?<a>立即登录</a></div>
            </div>
            <el-form :model="regForm" :rules="regs" ref="regForm" label-width="0px" class="itemValue">
                <el-form-item prop="mail" class='setValue' v-bind:class="{isShow: !isNext}">
                    <el-input v-model="regForm.mail" placeholder="公司邮箱"></el-input>
                    <i class='iconfontmv mvgongsimingcheng'></i>
                </el-form-item>
                <el-form-item prop="phone" class='setValue' v-bind:class="{isShow: !isNext}">
                    <el-input autocomplete="off" v-model="regForm.phone" placeholder="手机号"></el-input>
                    <i class='iconfontmv mvshoujihao'></i>
                </el-form-item>
                <el-form-item prop="passwp" class='setValue' v-bind:class="{isShow: !isNext}">
                    <el-input autocomplete="off" v-model="regForm.passwp" placeholder="密码"></el-input>
                    <i class='iconfontmv mvmima'></i>
                </el-form-item>
                <el-form-item class='setValue' prop="types" v-bind:class="{isShow: !isNext}">
                    <el-checkbox-group v-model="regForm.types">
                        <el-checkbox label="我已同意并阅读 I Seer 服务条款" name="types"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item v-bind:class="{isShow: !isNext}">
                    <el-button @click="toNext()">下一步</el-button>
                </el-form-item>
                <el-form-item class='setValue' v-bind:class="{isShow: isNext}">
                    <el-input v-model="regForm.comname" placeholder="公司名称"></el-input>
                    <i class='iconfontmv mvgongsimingcheng'></i>
                </el-form-item>
                <el-form-item class='setValue' v-bind:class="{isShow: isNext}">
                    <el-select v-model="regForm.region" placeholder="您的职能">
                        <el-option label="管理人员" value="0"></el-option>
                        <el-option label="客服人员" value="1"></el-option>
                    </el-select>
                    <i class='iconfontmv mvpipeizhiwei'></i>
                </el-form-item>
                <el-form-item class='setValue' v-bind:class="{isShow: isNext}">
                    <el-input v-model="regForm.comname" placeholder="QQ号"></el-input>
                    <i class='iconfontmv mvqq'></i>
                </el-form-item>
                <el-form-item class='setValue' v-bind:class="{isShow: isNext}">
                    <el-input v-model="regForm.comname" placeholder="城市"></el-input>
                    <i class='iconfontmv mvweizhi'></i>
                </el-form-item>
                <el-form-item class='setValue' v-bind:class="{isShow: isNext}">
                    <el-button type="primary" @click="submitRegForm('regForm')">立即注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
function checkMobile(str) {
    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0135678]|18[0-9]|14[57])[0-9]{8}$/;
    if (str.match(reg)) {
        return true;
    } else {
        return false;
    }
}

export default {

    data: function() {

        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('password');
                }
                callback();
            }
        };

        var checkPhone = (rule, value, callback) => {
            if (!checkMobile(value)) {
                callback(new Error('手机号不正确'));
                this.isNext = true
            } else {
                this.$refs.regForm.validateField('phone');
                callback();
            }
        };

        return {
            isloginHide: false,
            isNext: true,
            ruleForm: {
                name: '',
                passw: '',
                type: true
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                passw: [
                    { validator: validatePass, trigger: 'blur' }
                ],
            },
            regForm: {
                mail: '',
                phone: '',
                passwp: '',
                types: []
            },
            regs: {
                passwp: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                mail: [{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ],
                phone: [
                    { validator: checkPhone, trigger: 'blur' }
                ],
                types: [
                    { type: 'array', required: true, message: '必须同意条款', trigger: 'change' }
                ],
            }
        };
    },

    created: function() {},

    methods: {

        toReg() {
            this.isloginHide = true
        },

        tologin() {
            this.isloginHide = false
            this.isNext = true
        },

        toNext(formName) {
            this.isNext = false
        },

        submitRegForm(formName) {
            console.info(this.$refs[formName])
            this.$refs[formName].validate((valid) => {
                console.info(this.regForm)
                if (valid) {
                    alert('submit!');
                } else {
                    alert('error submit!!');
                    return false;
                }
            });
        },

        submitForm(formName) {
            console.info(this.$refs[formName])
            this.$refs[formName].validate((valid) => {
                console.info(this.ruleForm)
                if (valid) {
                    alert('submit!');
                } else {
                    alert('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }

    }

}
</script>
<style lang="scss">

@import'../../assets/css/login.scss';


</style>