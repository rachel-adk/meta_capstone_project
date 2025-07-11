import { useState, useEffect } from "react";
import { getUserProfile, saveProfile } from "../utils/data";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    fullName: "",
    gender: "",
    age: 0,
    height: 0,
    weight: 0,
    preExistingConditions: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await getUserProfile();
        setProfile({
          ...data,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "preExistingConditions") {
      const updated = checked
        ? [...profile.preExistingConditions, value]
        : profile.preExistingConditions.filter((item) => item !== value);
      setProfile((prev) => ({ ...prev, preExistingConditions: updated }));
    } else {
      setProfile((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    try {
      const submitData = {
        fullName: profile.fullName,
        gender: profile.gender,
        age: profile.age,
        height: parseInt(profile.height, 10),
        weight: parseInt(profile.weight, 10),
        preExistingConditions: profile.preExistingConditions,
      };
      await saveProfile(submitData);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };
  if (loading) return <div className="p-4"> Loading...</div>;
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
          Profile updated successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Gender</label>
          <select
            name="gender"
            value={profile.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">Age</label>
          <input
            type="age"
            name="age"
            value={profile.age}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1"> Height(cm)</label>
              <input
                type="number"
                name="height"
                value={profile.height}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1"> Weight(kg)</label>
              <input
                type="number"
                name="weight"
                value={profile.weight}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <label className="block font-medium mb-2">
            Pre-existing Conditions
          </label>
          <div className="flex flex-wrap gap-2">
            {["Asthma", "Diabetes", "Hypertension", "None"].map((cond) => (
              <label key={cond} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="preExistingConditions"
                  value={cond.toLowerCase()}
                  checked={profile.preExistingConditions.includes(
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
          className="w-full py-2 rounded-2xl shadow hover:shadow-lgg transition"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};
export default ProfilePage;
