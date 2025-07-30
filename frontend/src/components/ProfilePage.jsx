import { useState, useEffect } from "react";
import { getUserProfile, saveProfile } from "../utils/data.js";

const ProfilePage = ({ profile, setProfile }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!profile || !profile.age) {
      async function fetchProfile() {
        try {
          const data = await getUserProfile();
          setProfile({
            gender: data.gender || "",
            age: data.age || "",
            height: data.height || "",
            weight: data.weight || "",
            preExistingConditions: data.preExistingConditions || [],
            weeklyExercise: data.weeklyExercise || 0,
            stressLevel: data.stressLevel || 2,
            sleepQuality: data.sleepQuality || 3,
            smoking: data.smoking || "never",
            AlcoholPerWeek: data.AlcoholPerWeek || 0,
          });
        } catch (err) {
          console.error("Error fetching profile", err);
          setError(err.message);
          setProfile({
            gender: "",
            age: "",
            height: "",
            weight: "",
            preExistingConditions: [],
            weeklyExercise: 0,
            stressLevel: 2,
            sleepQuality: 3,
            smoking: "never",
            AlcoholPerWeek: 0,
          });
        } finally {
          setLoading(false);
        }
      }
      fetchProfile();
    } else {
      setLoading(false);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "preExistingConditions") {
      const current = Array.isArray(profile.preExistingConditions)
      ? profile.preExistingConditions
      : []
      const updated = checked
        ? [...current, value]
        : current.filter((item) => item !== value);
      setProfile((prev) => ({
         ...prev, [name]: updated,
    }))
  }};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setIsSaving(true);
    try {
      const submitData = {
        gender: profile.gender,
        age: profile.age,
        height: parseInt(profile.height, 10),
        weight: parseInt(profile.weight, 10),
        preExistingConditions: Array.isArray(profile.preExistingConditions)
        ? profile.preExistingConditions
        : [],
        weeklyExercise: parseInt(profile.weeklyExercise, 10) || 0,
        stressLevel: parseInt(profile.stressLevel, 10) || 0,
        sleepQuality: parseInt(profile.sleepQuality, 10) || 3,
        smoking: profile.smoking || "never",
        AlcoholPerWeek: parseInt(profile.AlcoholPerWeek, 10) || 0,
      };
      console.log("Submitting data: ", submitData);
      const response = await saveProfile(submitData);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error("Error saving profile:", err);
      setError(err.message);
    } finally {
      setIsSaving(false);
    }
  }

    if (loading) return <div className="p-4"> Loading...</div>;

    return (
      <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-teal-900">Your Profile</h2>
        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
            Profile updated successfully!
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            Error updating profile: {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1 text-teal-800">Gender</label>
            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded text-teal-600"
              required
            >
              <option value="">Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1 text-teal-800">Age</label>
            <input
              type="number"
              name="age"
              value={profile.age}
              onChange={handleChange}
              className="w-full p-2 border rounded text-teal-600"
              required
            />
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4 text-teal-800">
              <div>
                <label className="block font-medium mb-1"> Height(cm)</label>
                <input
                  type="number"
                  name="height"
                  value={profile.height}
                  onChange={handleChange}
                  className="w-full p-2 border rounded text-teal-600"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1 text-teal-800"> Weight(kg)</label>
                <input
                  type="number"
                  name="weight"
                  value={profile.weight}
                  onChange={handleChange}
                  className="w-full p-2 border rounded text-teal-600"
                  required
                />
              </div>
            </div>
          </div>
          <div className="border-b pb-4">
            <h3 className="text-lg font-medium mb-3 text-teal-800">Lifestyle Factors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1 text-teal-800">
                  Weekly Exercise(days)
                </label>
                <input
                  type="number"
                  name="weeklyExercise"
                  value={profile.weeklyExercise}
                  onChange={handleChange}
                  className="w-full p-2 border rounded text-teal-600"
                  min="0"
                  max="7"
                  required
                />
                <span className="text-sm text-teal-400">
                  Number of days you exercise per week
                </span>
                <div>
                  <label className="block font-medium mb-1 text-teal-800">
                    Stress Level (1-5)
                  </label>
                  <select
                    name="stressLevel"
                    value={profile.stressLevel}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-teal-600"
                    required
                  >
                    <option value="1">1 - Very Low </option>
                    <option value="2">2 - Low </option>
                    <option value="3">3 - Moderate </option>
                    <option value="4">4 - High </option>
                    <option value="5">5 - Very High </option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1 text-teal-800">
                    Sleep Quality
                  </label>
                  <select
                    name="sleepQuality"
                    value={profile.sleepQuality}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-teal-600"
                    required
                  >
                    <option value="1">1 - Very Poor </option>
                    <option value="2">2 - Poor </option>
                    <option value="3">3 - Average </option>
                    <option value="4">4 - Good </option>
                    <option value="5">5 - Excellent </option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1 text-teal-800">
                    Smoking Status
                  </label>
                  <select
                    name="Smoking"
                    value={profile.Smoking}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-teal-600"
                    required
                  >
                    <option value="never"> Never Smoked </option>
                    <option value="past"> Former Smoker </option>
                    <option value="current">Current Smoker </option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1 text-teal-800">
                    Alcohol Consumption (drinks/week)
                  </label>
                  <input
                    type="number"
                    name="AlcoholPerWeek"
                    value={profile.AlcoholPerWeek}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-teal-600"
                    min="0"
                    max="50"
                    required
                  />
                  <span className="text-sm text-teal-400">
                    Average number of alcoholic drinks per week
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
          <label className="block font-medium mb-2 text-teal-800">
            Pre-existing Conditions
          </label>
          <div className="flex flex-wrap gap-2 text-teal-800">
            {["Asthma", "Diabetes", "Hypertension", "None"].map((cond) => (
              <label key={cond} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="preExistingConditions"
                  value={cond.toLowerCase()}
                  checked={Array.isArray(profile.preExistingConditions) && profile.preExistingConditions.includes(
                    cond.toLowerCase()
                  )}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span>{cond}</span>
              </label>
            ))}
          </div>
          </div>
          <button
            type="submit"
            disabled={isSaving}
            className={`w-full py-2 ${
              isSaving
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-teal-600 hover:bg-teal-700"
            } text-white rounded-lg shadow transition font-medium`}>
              {isSaving ? "Saving..." : ""}
            Save Profile
          </button>
        </form>
      </div>
    );
  };


export default ProfilePage;
