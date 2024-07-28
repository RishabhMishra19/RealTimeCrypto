import { useForm, Controller } from "react-hook-form";
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Switch,
  Text,
} from "@chakra-ui/react";
import { SetupState, updateSetupData } from "../redux/setupSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { CryptoCurrencyOptions, CryptoOptions } from "../utils/constants";
import { MultiSelect, Option } from "chakra-multiselect";

export const SetupForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const setup = useSelector((state: RootState) => state.setup);

  const { handleSubmit, control } = useForm<SetupState>({
    defaultValues: setup,
  });

  const onSubmit = (data: SetupState) => {
    dispatch(updateSetupData(data));
  };

  return (
    <Box maxWidth="300px" mx="auto">
      <Text fontSize="md" fontWeight="bold" mb="10px">
        Setup
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl display="flex" alignItems="center" mb="4">
          <FormLabel htmlFor="pollingEnabled" mb="0">
            Polling Enabled
          </FormLabel>
          <Controller
            name="pollingEnabled"
            control={control}
            render={({ field }) => (
              <Switch
                isChecked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            )}
          />
        </FormControl>

        <FormControl mb="4">
          <FormLabel htmlFor="pollingIntervalInSec">
            Polling Interval (in seconds)
          </FormLabel>
          <Controller
            name="pollingIntervalInSec"
            control={control}
            render={({ field }) => (
              <Input type="number" id="pollingIntervalInSec" {...field} />
            )}
          />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Tracked Crypto Codes</FormLabel>
          <Controller
            name="trackedCryptoCodes"
            control={control}
            render={({ field }) => (
              <MultiSelect
                {...field}
                options={CryptoOptions}
                placeholder="Select tracked crypto codes"
                value={CryptoOptions.filter((option) =>
                  field.value.includes(option.value)
                )}
                onChange={(selectedOptions) => {
                  const selectedValues = (selectedOptions as Option[]).map(
                    (option) => option.value
                  );
                  field.onChange(selectedValues);
                }}
              />
            )}
          />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Currency</FormLabel>
          <Controller
            name="currency"
            control={control}
            render={({ field }) => (
              <MultiSelect
                {...field}
                options={CryptoCurrencyOptions}
                placeholder="Select currency"
                single
                value={CryptoCurrencyOptions.find(
                  (option) => option.value === field?.value
                )}
                onChange={(selectedOptions) => {
                  field.onChange(selectedOptions);
                }}
              />
            )}
          />
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit">
          Update
        </Button>
      </form>
    </Box>
  );
};
