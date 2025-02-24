import { useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants/index";
import { AntDesign } from "@expo/vector-icons";

export default function SignIn() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back Arrow Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/")}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      {/* Header */}
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Sign in to your Account</Text>
        <Text style={styles.subText}>
          Enter your email and password to sign in
        </Text>
      </View>

      {/* Form */}
      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.formControl}
            placeholder="Enter your email"
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              style={styles.passwordControl}
              placeholder="Enter your password"
              secureTextEntry
            />
          </View>
        </View>
      </View>

      {/* Forgot Password */}
      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>

      {/* Social Logins */}
      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} style={{ width: 24, height: 24 }} />
          <Text style={styles.secondaryButtonText}>Sign in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} style={{ width: 24, height: 24 }} />
          <Text style={styles.secondaryButtonText}>Sign in with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Link */}
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/join")}>
          <Text style={styles.signupSubTitleText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
